import './feature.css';

const Feature = ({title, text, isVertical}) => {
  return (
    <div className={`gpt3__features-container__feature ${isVertical && 'vertical' }`}>
        <div className='gpt3__features-container__feature-title'>
          <div />
          <h1>{title}</h1>
        </div>
        <div className='gpt3__features-container__feature-text'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature