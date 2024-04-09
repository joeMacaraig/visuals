export default async function Signin() {
  return (
    <section className="max-w-lg mx-auto border p-4 h-screen">
        <div className="flex flex-col gap-4">
          <h1 className="font-medium">Login Form</h1>
          <div>
            <div>Email</div>
            <input className="w-full px-2 border py-2" placeholder="email" />
          </div>
          <div>
            <div>Password</div>
            <input className="w-full px-2 border py-2" placeholder="password" />
          </div>
          <div className="grid grid-cols-2 place-items-center">
            <div className="bg-black text-white w-full text-center font-medium py-2 rounded-full">
              Login
            </div>
            <div className="underline">Signup</div>
          </div>
        </div>
    </section>
  );
}
