export default function ParticipantBadges({ session, city }) {
  return (
    <div className="flex items-center flex-wrap gap-3 mt-3">
      <span className="inline-flex items-center px-4 py-1.5 text-sm font-semibold text-indigo-800 bg-gradient-to-r from-indigo-100 to-white rounded-full shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 mr-2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        {session}
      </span>
      <span className="inline-flex items-center px-4 py-1.5 text-sm font-semibold text-purple-800 bg-gradient-to-r from-purple-100 to-white rounded-full shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 mr-2">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25m-18 0V6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v2.25m-18 0h18M5.25 6H18"
          />
        </svg>
        {city}
      </span>
    </div>
  );
}
