import React from 'react';

import styles from './ThinkCreatePromote.module.scss';
import leftPhoto from '../../assets/Thinkcreate_promote/left_img.svg';
import righttopPhoto from '../../assets/Thinkcreate_promote/orange_pr.svg';

import teamPhoto from '../../assets/Thinkcreate_promote/promote.svg';
import Promote from './Promote';
import Count from './count';

const ThinkCreatePromote = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.topRow}>
                <div className={styles.left}>
                    <h2 className={styles.heading}>
                        Think. Create.
                        <br />
                        Promote.
                    </h2>

                    <div className={styles.imageWrap_top}>
                        <img
                            src={righttopPhoto}
                            alt=""
                            className={styles.topimg}
                        />
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.imageWrap_left}>
                        <img
                            src={leftPhoto}
                            alt="Team member"
                            className={styles.leftimg}
                        />
                    </div>

                    <div className={styles.promote_}>
                        <div className={styles.imageWrap_center}>
                            <img
                                src={teamPhoto}
                                alt="Team member"
                                className={styles.image}
                            />
                        </div>


                        <Promote />
                    </div>
                </div>
            </div>

            <div className={styles.bottomRow}>
                <Count />
            </div>
        </section>
    );
};

export default ThinkCreatePromote;