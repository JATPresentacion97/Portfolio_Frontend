import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import type { CaseStudy } from '../types/portfolio';

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  index: number;
};

const CaseStudyCard = ({ caseStudy, index }: CaseStudyCardProps) => (
  <article className="case-study-card">
    <a href={caseStudy.url} target="_blank" rel="noopener noreferrer">
      <div className="case-study-image">
        <img src={caseStudy.image} alt={`${caseStudy.name} interface preview`} loading="lazy" width="960" height="960" />
        <span className="case-study-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="case-study-heading">
        <div><p className="mono-label">{caseStudy.category}</p><h3>{caseStudy.name}<span className="sr-only"> — opens in a new tab</span></h3></div>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
      </div>
    </a>
    <dl className="case-study-story">
      <div><dt>Challenge</dt><dd>{caseStudy.challenge}</dd></div>
      <div><dt>Contribution</dt><dd>{caseStudy.contribution}</dd></div>
      <div><dt>Outcome</dt><dd>{caseStudy.outcome}</dd></div>
    </dl>
    <ul className="technology-list" aria-label={`Technologies used for ${caseStudy.name}`}>
      {caseStudy.technologies.map((technology) => <li key={technology}>{technology}</li>)}
    </ul>
  </article>
);

export default CaseStudyCard;
