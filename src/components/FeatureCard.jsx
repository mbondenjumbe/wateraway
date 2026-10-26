function FeatureCard(
  { title, description, icon }) 

{ return ( <article className="feature-card"> 
{icon && <div className="feature-icon">{icon}</div>}
 <h3 className="feature-title">{title}</h3> 
 <p className="feature-desc">{description}</p> 
 </article> ); }

export default FeatureCard;