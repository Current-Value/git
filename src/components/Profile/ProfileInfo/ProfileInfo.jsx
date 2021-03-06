import React from 'react'
import s from './ProfileInfo.module.css'
import profileReducer from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img src='https://www.w3schools.com/howto/img_nature_wide.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava+descriprion
            </div>

        </div>
    )
}

export default ProfileInfo;