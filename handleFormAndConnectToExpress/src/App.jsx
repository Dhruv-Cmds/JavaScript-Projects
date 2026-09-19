import { useForm } from "react-hook-form";

export default function App() {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {

    const r = await fetch("http://localhost:3000/pp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let res = await r.text()

    console.log(data, res)

    // if (data.username !== "dhruv") {
    //   setError("myForm", { message: "Your form is not in good order because credentials are invalid" })
    // }

    // if (data.username === "rohan") {
    //   setError("blocked", { message: "Sorry this user is blocked" })
    // }

  }
  return (

    <>
      {isSubmitting && <div>Loaduing....</div>}
      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type="text"
          placeholder="username"
          {
          ...register(
            "username",
            {
              required: { value: true, message: "This field is required" },
              minLength: { value: 4, message: "min len is 4" },
              maxLength: { value: 10, message: "max len is 10" }
            }
          )
          }
        />

        {errors.username && <div>{errors.username.message}</div>}

        <input
          type="password"
          placeholder="password"
          {
          ...register(
            "password",
            {
              required: true,
              minLength: { value: 4, message: "min len is 4" },
              maxLength: { value: 10, message: "max len is 10" }
            }
          )
          }
        />
        {errors.password && <div>{errors.password.message}</div>}

        <input
          type="submit"
          disabled={isSubmitting} />

        {errors.myForm && <div>{errors.myForm.message}</div>}
        {errors.blocked && <div>{errors.blocked.message}</div>}

      </form>

    </>
  );
}
