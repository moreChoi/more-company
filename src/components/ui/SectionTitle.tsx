interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export default function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3 uppercase">
        {title}
      </h2>
      <p className="text-sm md:text-base font-medium text-blue-600 tracking-wider">
        {subtitle}
      </p>
    </div>
  );
}
