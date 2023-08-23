import Card from '../cards/Card';
import { Link } from 'react-router-dom';

const Films = ({ media }) => {
  return (
    <div className='films'>
      {/* <h3 className="section">{section.name}</h3> */}
      <div className='cards'>
        {media
          .filter((media) => media.category === 'film')
          .map((media) => (
            <Link key={media.id} to={`/films/${media.id}`}>
              <Card {...media} />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Films;
