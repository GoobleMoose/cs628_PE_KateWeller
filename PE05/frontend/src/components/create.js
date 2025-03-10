import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   recipe: "",
   description: "",
   instructions: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newRecipe = { ...form };
 
   await fetch("https://special-space-zebra-g4q4r6gj75pgfv7w5-5050.app.github.dev/record", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newRecipe),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ recipe: "", description: "", instructions: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Recipe</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="recipe">Recipe</label>
         <input
           type="text"
           className="form-control"
           id="recipe"
           value={form.recipe}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="description">Description</label>
         <input
           type="text"
           className="form-control"
           id="description"
           value={form.description}
           onChange={(e) => updateForm({ position: e.target.value })}
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
             checked={form.instructions === "Easy"}
             onChange={(e) => updateForm({ instructions: e.target.value })}
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
             checked={form.instructions === "Moderate"}
             onChange={(e) => updateForm({ instructions: e.target.value })}
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
             checked={form.instructions === "Difficult"}
             onChange={(e) => updateForm({ instructions: e.target.value })}
           />
           <label htmlFor="descriptionDifficult" className="form-check-label">Difficult</label>
         </div>
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create recipe"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}