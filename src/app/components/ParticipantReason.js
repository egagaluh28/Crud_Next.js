export default function ParticipantReason({ reason }) {
  if (!reason) return null;
  return (
    <div className="mt-4 pt-4 border-t border-gray-100">
      <p className="text-sm text-gray-600 italic leading-relaxed">
        <span className="text-indigo-400 text-lg font-bold mr-1">&ldquo;</span>
        {reason}
        <span className="text-indigo-400 text-lg font-bold ml-1">&rdquo;</span>
      </p>
    </div>
  );
}
