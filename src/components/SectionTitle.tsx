type SectionTitleProps = {
  number: string;
  first: string;
  second: string;
};

const SectionTitle = ({ number, first, second }: SectionTitleProps) => (
  <div className="section-heading">
    <span aria-hidden="true">{number}</span>
    <h2>{first}<br /><em>{second}</em></h2>
  </div>
);

export default SectionTitle;
