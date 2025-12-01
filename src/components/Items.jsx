import React from 'react';
import Lesson from './Lesson';

class Items extends React.Component {
  render() {

    const { title, list } = this.props;

    console.log(list)
    console.log(title)

    return (
      <section className='bg-red flex flex-col justify-center '>
        <div className='bg-orange h-14 flex justify-center items-center'>
          <div className='flex justify-start w-3/5 h-fit'>
            <h2 className='text-amber-50 text-4xl'>{title}</h2>
          </div>
        </div>
        <div className="h-auto flex justify-center space-x-16 bg-yellow-400 w-3/5 mx-auto">


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
      </section>  
    );
  }
}

export default Items;