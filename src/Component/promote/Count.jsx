import React from 'react';
import Users from '../../assets/Thinkcreate_promote/client_icon.svg';
import CalendarDays from '../../assets/Thinkcreate_promote/event_icon.svg';
import Clock from '../../assets/Thinkcreate_promote/badge_icon.svg';
import Boxes from '../../assets/Thinkcreate_promote/material_icon.svg';

import styles from './Count.module.scss';

const stats = [
    { id: 'clients', label: 'Our Clients', value: '208', Icon: Users },
    { id: 'events', label: 'Events', value: '355', Icon: CalendarDays },
    { id: 'years', label: 'Years of Experience', value: '10', Icon: Clock },
    { id: 'materials', label: 'Materials', value: '15049', Icon: Boxes },
];

const Count = () => {
    return (
        <div className={styles.count}>
            {stats.map(({ id, label, value, Icon }) => (
                <div key={id} className={styles.item}>
                    <div className={styles.iconWrap}>
                        <img src={Icon} className={styles.icon} alt={label} />
                    </div>
                    <div className={styles.details}>
                        <span className={styles.label}>{label}</span>
                        <span className={styles.value}>{value}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Count;