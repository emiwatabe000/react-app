import React, { useState, useEffect } from "react";
import '../../styles/Table.scss';

export type TableRow = {
  id: number;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

type CustomTableProps = {
  checkbox: boolean;
  data: TableRow[];
};

export function CustomTable({checkbox = false, data}: CustomTableProps ) {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked) {
      setCheckedItems(data.map((item) => item.id));
    } else {
      setCheckedItems([]);
    }
  }

  const handleCheck = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isAllChecked =
    data.length > 0 && checkedItems.length === data.length;

  return (
    <table className="table">
      <thead>
        <tr>
          {checkbox && (
          <th>
            <input 
              type="checkbox"
              checked={isAllChecked}
              onChange={handleCheckAll}
             />
          </th>
          )}
          <th>Dessert (100g serving)</th>
          <th>Calories</th>
          <th>Fat (g)</th>
          <th>Carbs (g)</th>
          <th>Protein (g)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {checkbox && (
              <td>
                <input 
                  type="checkbox" 
                  checked={checkedItems.includes(item.id)}
                  onChange={() => handleCheck(item.id)}
                />
              </td>
            )}
            <td>{item.name}</td>
            <td>{item.calories}</td>
            <td>{item.fat}</td>
            <td>{item.carbs}</td>
            <td>{item.protein}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
