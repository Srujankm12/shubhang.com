

export default function ParticleBackgroundExample() {
  return (
    <div className="relative h-screen bg-background">
      <ParticleBackgroundExample />
      <div className="relative z-10 flex items-center justify-center h-full">
        <p className="text-foreground">Particle animation in background</p>
      </div>
    </div>
  );
}
