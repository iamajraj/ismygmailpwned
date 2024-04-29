export default function Home() {
  return (
    <main className="h-full w-full bg-gradient-to-br bg-[#1e1e1e] pt-5">
      <p className="text-white text-sm max-w-7xl mx-auto bg-black px-10 py-2 rounded-[14px]">
        It's very crucial to keep your gmail away from attackers database.
        That's why you need to check if your gmail is pwned or not. I guess you
        are also questioning how do the attackers get peoples gmails in their
        database. That's a very good question. I'm amazed as well. -&gt;&lt;-
      </p>
      <h1 className="mt-10 text-[45px] text-white font-medium text-center border-2 border-white w-max px-10 rounded-full mx-auto">
        Is my gmail pwned? :/
      </h1>

      <div className="w-full flex mt-10 flex-col items-center justify-center mx-auto bg-[#131313] py-10">
        <input
          type="email"
          className="w-full max-w-[300px] py-2 rounded-lg focus:ring-2 ring-blue-500 px-5 focus:outline-none"
          placeholder="ohhthismy@email.com"
        />
        <input
          type="password"
          className="mt-4 w-full max-w-[300px] py-2 rounded-lg focus:ring-2 ring-blue-500 px-5 focus:outline-none"
          placeholder="myneversharedpassword"
        />

        <button className="text-white px-4 py-2 rounded-full border-2 border-white bg-black mt-5">
          Save it now!
        </button>
        <p className="mt-1 w-full max-w-[300px] text-end mx-auto text-white text-[12px]">
          *from attackers database (obviously)
        </p>
      </div>

      <div className="w-full mt-5 max-w-7xl mx-auto flex gap-10">
        <img
          className="h-[200px]"
          src="https://i.imgflip.com/49h71v.png"
          alt="attacker_who"
        />
        <div className="text-white w-full">
          <p>
            <span className="text-3xl">&lt;-</span> You are literally this
          </p>
          <br />
          <p className="w-full text-end text-[11px]">
            A smart, Intelligent Person
            <br />
            <span className="text-[5px]">maybe</span>
          </p>
        </div>
      </div>
    </main>
  );
}
