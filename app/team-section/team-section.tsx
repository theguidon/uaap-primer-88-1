export function TeamSection() {
  return (
    <section className="flex flex-col h-dvh lg:flex-row lg:h-[50dvh]">
      <div className="bg-black h-[60dvh]">image</div>
      <div className="text-center p-8 lg:text-right text-uaap-blue">
        <h2 className="capitalize font-display font-bold">Men's Basketball</h2>
        <h2 className="uppercase text-[3.25rem] font-display font-bold leading-[85%] my-2">
          RESTORING ORDER
        </h2>
        <div className="text-sm font-body">
          <span className="uppercase">BUILT ON</span> years of excellence, the
          Ateneo Men’s Basketball Team has long operated under a standard of
          winning. Despite the roadblock of missing the Final Four for the first
          time in 11 years, the Blue Eagles return with the same mission: to
          assert their place among the UAAP’s elite.
        </div>
        <button className="upppercase py-2 px-3.5 bg-uaap-dark-blue text-white font-body font-bold mt-4">
          READ MORE
        </button>
      </div>
    </section>
  );
}
