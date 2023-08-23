import Card from '../cards/Card';
import { Link } from 'react-router-dom';

const Series = ({ media }) => {
  return (
    <div className='films'>
      <div className='cards'>
        {media
          .filter((media) => media.category === 'serie')
          .map((media) => (
            <Link key={media.id} to={`/films/${media.id}`}>
              <Card {...media} />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Series;
