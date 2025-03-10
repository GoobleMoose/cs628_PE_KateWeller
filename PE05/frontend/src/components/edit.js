import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
   recipe: "",
   description: "",
   instructions: "",
   recipes: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`https://special-space-zebra-g4q4r6gj75pgfv7w5-5050.app.github.dev/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedRecipe = {
     recipe: form.recipe,
     description: form.description,
     instructions: form.instructions,
   };
 
   // This will send a post request to update the data in the database.
   await fetch(`https://special-space-zebra-g4q4r6gj75pgfv7w5-5050.app.github.dev/record/${params.id}`, {
     method: "PATCH",
     body: JSON.stringify(editedRecipe),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div>
     <h3>Update Recipe</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="recipe">Recipe: </label>
         <input
           type="text"
           className="form-control"
           id="recipe"
           value={form.recipe}
           onChange={(e) => updateForm({ recipe: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="instructions">Instructions: </label>
         <input
           type="text"
           className="form-control"
           id="instructions"
           value={form.instructions}
           onChange={(e) => updateForm({ instructions: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="descriptionOptions"
             id="descriptionEasy"
             value="Easy"
             checked={form.description === "Easy"}
             onChange={(e) => updateForm({ description: e.target.value })}
           />
           <label htmlFor="descriptionEasy" className="form-check-label">Easy</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="descriptionOptions"
             id="descriptionModerate"
             value="Moderate"
             checked={form.description === "Moderate"}
             onChange={(e) => updateForm({ description: e.target.value })}
           />
           <label htmlFor="descriptionModerate" className="form-check-label">Moderate</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="descriptionOptions"
             id="descriptionDifficult"
             value="Difficult"
             checked={form.description === "Difficult"}
             onChange={(e) => updateForm({ description: e.target.value })}
           />
           <label htmlFor="descriptionDifficult" className="form-check-label">Difficult</label>
       </div>
       </div>
       <br />
 
       <div className="form-group">
         <input
           type="submit"
           value="Update Recipe"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}