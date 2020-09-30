import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import { MdNotifications, MdNotificationsActive } from 'react-icons/md';
import {
  Container,
  BadgeNotify,
  NotificationList,
  Scroll,
  Notifications,
} from './styles';

export default function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [visible, setVisible] = useState(false);

  const hasUnread = useMemo(
    () => !!notifications.find((notification) => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('/notifications');
      const data = response.data.map((notification) => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));
      setNotifications(data);
    }
    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`/notifications/${id}`);

    setNotifications(
      notifications.map((notification) =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <BadgeNotify hasUnread={hasUnread} onClick={handleToggleVisible}>
        <MdNotifications size={30} />
      </BadgeNotify>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map((notification) => (
            <Notifications key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marca como lida
                </button>
              )}
            </Notifications>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
