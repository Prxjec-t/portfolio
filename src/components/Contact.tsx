const Contact = () => {
  return (
    <section id="contact" className="pt-15 lg:pt-30 text-center pb-20">
      <div className="flex justify-center">
        <h2 className="text-white font-bold text-xl border-2 w-5/10 md:w-3/10 lg:w-2/10 py-2">Connect with me!</h2>
      </div>

      <div className="bg-[#765353] w-7/8 lg:w-3/8 gap-2 mt-4 mx-auto p-5 flex flex-col items-start font-medium text-white text-lg border-10 border-[#5B1111]">
        <p className="">
          Email:{' '}
          <a href="mailto:kimi.piilola@gmail.com" className="text-blue-400 hover:text-blue-800">
            kimi.piilola@gmail.com
          </a>
        </p>

        <p>
          Github:{' '}
          <a
            href="https://github.com/Prxjec-t"
            target="_blank"
            rel="noreferrer"
            className="text-slate-800 hover:text-slate-400">
            Prxjec-t
          </a>
        </p>

        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/kimi-leminaho-530495252/?isSelfProfile=true"
            target="_blank"
            rel="noreferrer"
            className="text-blue-800 hover:text-blue-400">
            Kimi Leminaho
          </a>
        </p>

        <p>
          Steam:{' '}
          <a href="https://steamcommunity.com/id/MrPrxject/" className="text-slate-800 hover:text-slate-400">
            Prxject
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
