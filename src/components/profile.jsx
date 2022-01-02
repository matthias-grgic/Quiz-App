import styled from "styled-components"
import { useEffect, useState } from "react"

function Profile() {
    const [user, setUser] = useState([])
    useEffect(() => {
        async function fetchProfiles() {
            const response = await fetch("https://randomuser.me/api/")
            const profile = await response.json()
            return profile
        }

        fetchProfiles().then((getUser) => {
            const userProfile = getUser.results.map((getUser, index) => {
                return {
                    id: index + 1,
                    name: getUser.name,
                    country: getUser.location.country,
                    city: getUser.location.city,
                    age: getUser.dob.age,
                    img: getUser.picture,
                }
            })
            setUser(userProfile)
        })
    }, [])

    const userCard = user.map((user, index) => (
        <ProfilePage key={index}>
            <img src="/src/images/profile.svg" width="15%" />
            <ProfileImage src={user.img.medium} alt="" width="30%" />
            <h3>
                {user.name.first} {user.name.last}
            </h3>
            <div>Country: {user.country}</div>
            <div>City: {user.city}</div>
            <div>Age: {user.age}</div>
        </ProfilePage>
    ))

    return <ProfileComplete>{userCard}</ProfileComplete>
}

export default Profile

const ProfileComplete = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 60px;
    padding: 10px;
    gap: 10px 20px;
`

const ProfilePage = styled.div`
    align-items: center;
    box-shadow: 0 11px 10px -2px rgba(50, 50, 50, 0.1);
    border-radius: 15px;
    background: linear-gradient(180deg, rgba(2, 0, 36, 0.4009978991596639) 0%, rgba(185, 131, 255, 1) 0%, rgba(148, 179, 253, 1) 44%, rgba(148, 218, 255, 1) 76%, rgba(153, 254, 255, 0.8211659663865546) 100%);
    column-gap: 12px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px;
    text-align: center;
`
const ProfileImage = styled.img`
    border-radius: 15px;
`
