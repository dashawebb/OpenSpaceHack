import React, { useState } from 'react'
import styles from '../AdminPage/AdminPage.module.less'
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'
import { ReactComponent as BugsIcon } from '../../assets/img/bugs.svg'
import { ReactComponent as RatingIcon } from '../../assets/img/rating.svg'
import { ReactComponent as ThreadsIcon } from '../../assets/img/threads.svg'
import { ReactComponent as ChatsIcon } from '../../assets/img/chats.svg'
import Shop from '../../components/Shop/Shop'
import Threads from '../../components/Threads/Threads'
import Rating from '../../components/Rating/Rating'

const navItems = [
    {
        title: 'Треды',
        icon: <BugsIcon />,
    },
    {
        title: 'Мои треды',
        icon: <RatingIcon />,
    },
    {
        title: 'Рейтинг тестировщиков',
        icon: <ThreadsIcon />,
    },
    {
        title: 'Магазин',
        icon: <ChatsIcon />,
    },
]

const MyThreads = () => <div>Я MyThreads</div>

const content = [<Threads />, <MyThreads />, <Rating />, <Shop />]

const TesterPage = ({ setUser }) => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className={styles.container}>
            <NavBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} navItems={navItems} />
            <div className={styles.container__content}>
                <div className={styles.topPanel} onClick={() => setUser('')}>
                    <Button text={'выпустите меня'} />
                </div>
                {content[selectedTab.toString()]}
            </div>
        </div>
    )
}
export default TesterPage
