import { useRef, FormEvent } from 'react';

interface ProfileFormProps {
  onChangePassword: (passwordData: {
    oldPassword: string;
    newPassword: string;
  }) => void;
}

function ProfileForm(props: ProfileFormProps) {
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current!.value;
    const enteredNewPassword = newPasswordRef.current!.value;

    // optional: Add validation

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={newPasswordRef}
        />
      </div>
      <div>
        <label htmlFor="old-password">Old Password</label>
        <input
          type="password"
          id="old-password"
          ref={oldPasswordRef}
        />
      </div>
      <div>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
