import React from 'react';
import styles from './ProfileBoxes.module.css';
import ProfileCard from "../../components/Profile/ProfileCard.jsx"; // You will create this CSS module file

const ProfileBoxes = () => {
    return (
        <div className={styles.profileBoxes}>
            <p>We’ve found 24 sales reps that matched your requirements</p>
            <ProfileCard
                imageUrl={"/profilePic.jpg"}
                name="John"
                surname="Doe"
                location="New York, USA"
                bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...."
                language="English"
                experience="5 years"
                niche="Info-product"
                amountClosed="$500k-$1m"
            />
            <ProfileCard
                imageUrl={"/profilePic.jpg"}
                name="John"
                surname="Doe"
                location="New York, USA"
                bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...."
                language="English"
                experience="5 years"
                niche="Info-product"
                amountClosed="$500k-$1m"
            />
            <ProfileCard
                imageUrl={"/profilePic.jpg"}
                name="John"
                surname="Doe"
                location="New York, USA"
                bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...."
                language="English"
                experience="5 years"
                niche="Info-product"
                amountClosed="$500k-$1m"
            />

        </div>
    );
};

export default ProfileBoxes;
