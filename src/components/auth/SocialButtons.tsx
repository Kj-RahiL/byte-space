
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden>
      <path
        fill="currentColor"
        d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07z"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden>
      <path
        fill="currentColor"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.58-5.17 3.58-8.81z"
      />
      <path
        fill="currentColor"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3a7.2 7.2 0 0 1-10.72-3.78H1.34v3.1A12 12 0 0 0 12 24z"
      />
      <path fill="currentColor" d="M5.34 14.31a7.2 7.2 0 0 1 0-4.62v-3.1H1.34a12 12 0 0 0 0 10.82l4-3.1z" />
      <path
        fill="currentColor"
        d="M12 4.77c1.76 0 3.34.61 4.59 1.8l3.44-3.44A11.52 11.52 0 0 0 12 0 12 12 0 0 0 1.34 6.59l4 3.1A7.15 7.15 0 0 1 12 4.77z"
      />
    </svg>
  );
}

const providers = [
  { name: "Facebook", Icon: FacebookIcon },
  { name: "Google", Icon: GoogleIcon },
];

const SocialButtons = () => {
  return (
    <div className="flex justify-center gap-4">
      {providers.map(({ name, Icon }) => (
        <button
          key={name}
          type="button"
          aria-label={`Sign in with ${name}`}
          className="flex size-18 items-center justify-center rounded-2xl border border-shuttle-gray-200 bg-white text-shuttle-gray-950 transition-colors hover:border-shuttle-gray-300 hover:bg-shuttle-gray-50"
        >
          <Icon />
        </button>
      ))}
    </div>
  );
};

export default SocialButtons;
