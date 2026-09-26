export default function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="steps">
      {steps.map(s => (
        <li key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
