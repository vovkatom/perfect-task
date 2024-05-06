const EditProfileForm = ({ user }) => {
  return (
    <div>
      <input name="Name" value={user.name} />
      <input name="EMail" value={user.email} />
    </div>
  );
};

export default EditProfileForm;
