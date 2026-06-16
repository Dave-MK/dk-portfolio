type Props = {
  label: string;
  heading: string;
  subheading?: string;
  centered?: boolean;
};

export function SectionHeading({ label, heading, subheading, centered = false }: Props) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F4F7FB]">{heading}</h2>
      {subheading && (
        <p className={`mt-4 text-[#9BA7B7] text-sm sm:text-base leading-relaxed ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {subheading}
        </p>
      )}
    </div>
  );
}
