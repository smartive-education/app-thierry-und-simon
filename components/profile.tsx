import {
  SizeType,
  Toggle,
  User,
  UserImage,
  UserImageSizeType
} from '@smartive-education/thierry-simon-mumble'
import { useSession } from 'next-auth/react'

export default function Profile({ user }) {
  const { data: session } = useSession()

  console.log({ user })

  console.log(session)

  return (
    <div>
      <div className="w-100 pt-16/9 bg-violet-200 rounded-lg relative mb-l ">
        <div className="overflow-hidden absolute w-full h-full top-0 bottom-0  rounded-lg">
          <img
            className="object-cover w-full h-full"
            src={'https://picsum.photos/800/600'}
          />
        </div>
        <div className="absolute -bottom-xxl right-l">
          <UserImage type={UserImageSizeType.XL} imgSrc={user.avatarUrl} />
        </div>
      </div>
      <User
        type={SizeType.XL}
        fullName={`${user.firstName} ${user.lastName}`}
        userName={user.userName}
        hometown="Zürich"
        datePosted={new Date('2021-08-12').getTime()}
        dateJoined={new Date('2020-02-12').getTime()}
      />
      <p className="mt-s">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>

      <div className="my-l"></div>
      <Toggle />
    </div>
  )
}
