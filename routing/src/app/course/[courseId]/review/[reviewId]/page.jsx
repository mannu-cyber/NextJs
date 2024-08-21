export default function Review({ params }) {
  return (
    <div>
      <h1>
        Course ID: {params.courseId} . Course Review: {params.reviewId}
      </h1>
    </div>
  );
}
