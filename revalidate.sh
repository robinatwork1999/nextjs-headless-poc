curl "https://nextjs-headless-poc-chi.vercel.app/" \
-X POST \
-H "Content-Type: application/json" \
-d "[\"/products\", \"/\", \"/articles\" ]"