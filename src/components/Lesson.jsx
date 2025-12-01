import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }

  handleClickLesson() {
    this.setState({ isModalOpen: true });
  }

  handleClickClose() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { name, image, introduction } = this.props;

    return (
      <article className="flex flex-col items-center justify-center my-8">
        {/* Tarjeta de la lección */}
        <div
          onClick={() => this.handleClickLesson()}
          className="cursor-pointer bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 w-52"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover"
          />
          <p className="text-center text-xl text-gray-800 py-3">
            {name}
          </p>
        </div>

        {/* Modal */}
        {this.state.isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-96 relative">
              <h2 className="text-2xl text-center mb-4">{name}</h2>
              <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-lg mb-3"
              />
              <p className="text-gray-600 text-base text-center mb-4">{introduction}</p>

              <div className="flex justify-between">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Ir a perfil
                </button>
                <button
                  onClick={() => this.handleClickClose()}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </article>
    );
  }
}

export default Lesson;
