import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://www.w3schools.com/howto/img_nature_wide.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+descriprion
            </div>

        </div>
    )
}

export default ProfileInfo;