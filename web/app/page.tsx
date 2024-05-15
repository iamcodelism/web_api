import MyForm from './ui/form'
export default function Home() {
  return (
    <main className="p-10">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <MyForm />
      </div>
    </main>
  );
}
