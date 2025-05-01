import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CadastrarCao.module.css';

const CadastrarCao = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Carrega os dados atuais do localStorage
    const savedDogs = JSON.parse(localStorage.getItem('dogsData')) || [];
    
    // Calcula novo ID
    const newId = savedDogs.length > 0 
      ? Math.max(...savedDogs.map(dog => dog.id)) + 1 
      : 1;

    const newDog = {
      id: newId,
      name: formData.name,
      breed: formData.breed,
      image: formData.image || `https://placedog.net/500/400?id=${newId}`
    };

    const updatedDogs = [...savedDogs, newDog];
    
    // Salva no localStorage e dispara evento
    localStorage.setItem('dogsData', JSON.stringify(updatedDogs));
    window.dispatchEvent(new CustomEvent('dogsUpdated'));

    navigate('/racas');
  };

  return (
    <div className={styles.container}>
      <h1>Cadastrar Novo Cão</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="breed">Raça:</label>
          <input
            type="text"
            id="breed"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image">URL da Imagem (opcional):</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Deixe em branco para imagem padrão"
          />
        </div>

        <button type="submit" className={styles.submitButton}>Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarCao;