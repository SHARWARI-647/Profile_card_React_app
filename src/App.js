import './App.css';
import React, { useState } from 'react';
import Card from './Card';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [form, setForm] = useState({
    name: '', img: '', bio: '', cnt: '', skill: '', exp: '', loc: '', template: 'classic'
  });

  function setVal(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setProfiles([...profiles, form]);
    setForm({
      name: '', img: '', bio: '', cnt: '', skill: '', exp: '', loc: '', template: 'classic'
    });
  }

  return (
    <>
      <h1>My Profile Card</h1>
      <div className="detail">
        <h3>Fill the Details below</h3>
        <form onSubmit={handleSubmit} className="profile-form">
          <input type="text" name="name" placeholder="Enter a name" value={form.name} onChange={setVal} />
          <input type="text" name="img" placeholder="Enter an image URL" value={form.img} onChange={setVal} />
          <input type="text" name="bio" placeholder="Enter a Bio" value={form.bio} onChange={setVal} />
          <input type="text" name="cnt" placeholder="Enter Contact" value={form.cnt} onChange={setVal} />
          <input type="text" name="skill" placeholder="Enter Skills" value={form.skill} onChange={setVal} />
          <input type="text" name="exp" placeholder="Enter Experience" value={form.exp} onChange={setVal} />
          <input type="text" name="loc" placeholder="Enter Location" value={form.loc} onChange={setVal} />
          <select name="template" value={form.template} onChange={setVal}>
              <option value="classic">Classic</option>
  <option value="modern">Modern</option>
  <option value="neon">Neon</option>
  <option value="glass">Glass</option>
  <option value="gradient">Gradient</option>
  <option value="shadowed">Shadowed</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="card-container">
        {profiles.map((profile, index) => (
          <Card key={index} {...profile} />
        ))}
      </div>
    </>
  );
}

export default App;
