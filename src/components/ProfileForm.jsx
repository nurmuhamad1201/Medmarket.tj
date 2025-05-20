import React, { useState } from 'react';
import { Button } from '@mui/material';

export default function ProfileForm() {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditToggle = () => {
    setIsEditable(true);
  };

  return (
    <section className="space-y-6 bg-white rounded-lg p-6 w-full">
      <div className="grid gap-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">Полное имя</label>
          <input
            type="text"
            name="name"
            id="name"
            disabled={!isEditable}
            defaultValue="Рустамов Чамшед"
            className={`w-full border rounded-lg p-2 mt-1 ${
              isEditable ? 'border-[#A8A8A8] bg-white' : '  text-[#000000] border-[#A8A8A8] font-semibold text-[18px] cursor-not-allowed'
            }`}
          />
        </div>

        <div>
          <label htmlFor="birth" className="block font-medium text-gray-700">Дата рождения</label>
          <input
            type="date"
            name="birth"
            id="birth"
            disabled={!isEditable}
            defaultValue="2000-10-25"
            className={`w-full border rounded-lg p-2 mt-1 ${
              isEditable ? 'border-[#A8A8A8] bg-white' : '  text-[#000000] border-[#A8A8A8] font-semibold text-[18px] cursor-not-allowed'
            }`}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-medium text-gray-700">Телефон</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            disabled={!isEditable}
            defaultValue="+(992) 93 2222 22"
            className={`w-full border rounded-lg p-2 mt-1 ${
              isEditable ? 'border-[#A8A8A8] bg-white' : '  text-[#000000] border-[#A8A8A8] font-semibold text-[18px] cursor-not-allowed'
            }`}
          />
        </div>
      </div>

      <div className="pt-4 border-t">
       
       <div className='flex  justify-between'> <p className="font-semibold text-lg mb-2">Адрес доставки</p>
        <Button
          variant="outlined"
          sx={{
            mb: 2,
            borderRadius: '12px',
            color: 'white',
            bgcolor: '#8168F0',
            textTransform: 'none',
            padding: '6px 24px',
            fontWeight: 500,
            '&:hover': {
              bgcolor: '#6d55dd',
            }
          }}
        >
          Добавить
        </Button></div>

        <div className="grid gap-4">
          <div>
            <label htmlFor="address" className="block font-medium text-gray-700">Адрес доставки 1</label>
            <input
              type="text"
              name="address"
              id="address"
              disabled={!isEditable}
              defaultValue="Душанбе, ул. Рудаки 92"
              className={`w-full border rounded-lg p-2 mt-1 ${
                isEditable ? 'border-[#A8A8A8] bg-white' : '  text-[#000000] border-[#A8A8A8] font-semibold text-[18px] cursor-not-allowed'
              }`}
            />
          </div>

          <div>
            <label htmlFor="address2" className="block font-medium text-gray-700">Адрес доставки 2</label>
            <input
              type="text"
              name="address2"
              id="address2"
              disabled={!isEditable}
              defaultValue="Душанбе, ул. Рудаки 77"
              className={`w-full border rounded-lg p-2 mt-1 ${
                isEditable ? 'border-[#A8A8A8] bg-white' : '  text-[#000000] border-[#A8A8A8] font-semibold text-[18px] cursor-not-allowed'
              }`}
            />
          </div>
        </div>
      </div>

      {!isEditable ? (
        <Button
          variant="contained"
          onClick={handleEditToggle}
          sx={{
            bgcolor: '#8168F0',
            color: 'white',
            borderRadius: '10px',
            padding: '10px 30px',
            textTransform: 'none',
            fontWeight: 500,
            mt: 4
          }}
        >
          Обновлять
        </Button>
      ) : (
        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: '#4CAF50',
            color: 'white',
            borderRadius: '10px',
            padding: '10px 30px',
            textTransform: 'none',
            fontWeight: 500,
            mt: 4
          }}
        >
          Сохранить изменения
        </Button>
      )}
    </section>
  );
}
