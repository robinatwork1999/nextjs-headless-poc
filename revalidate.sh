curl "https://nextjs-headless-poc-chi.vercel.app/api/revalidate" \
-X POST \
-H "Content-Type: application/json" \
-d "[\"/products\", \"/\", \"/articles\" ]"
