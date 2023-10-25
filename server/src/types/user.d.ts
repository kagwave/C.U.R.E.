interface User {
  email: string,
  unity_id: string,
  name: {
    first_name: string,
    last_name: string
  },
  display_name: {type: String, required: true},
  profile_photo: {type: String, required: true},
  projects: project,
  accessToken?: string,
  refreshToken?: string
}