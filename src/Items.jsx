import React from 'react';
import Lesson from './Lesson';

class Items extends React.Component {
  render() {

    const { title, list } = this.props;

    console.log(list)
    console.log(title)

    return (
      <div>
        <div className='bg-orange h-14 flex items-center'>
          <h2 className=' ml-10 text-amber-50 text-4xl'>{title}</h2>
        </div>
        <div className="h-auto flex justify-center space-x-24 bg-red">


          {list.map((item) => {
            return (
              <Lesson
                key={item.id}
                name={item.name}
                image={item.image}
                introduction={item.introduction}
              />
            );
          })}

        </div>
      </div>
    );
  }
}

export default Items;