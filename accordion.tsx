kind = "web"
previewPath = "/"
title = "Tideborn Isles"
description = "An original low-poly third-person browser action RPG prototype with responsive movement, melee combat, enemy AI, quests, progression, procedural island exploration, and local saves."
version = "1.0.0"
id = "artifacts/tideborn-isles"
router = "path"

[[services]]
name = "web"
paths = [ "/" ]
localPort = 18421

[services.development]
run = "pnpm --filter @workspace/tideborn-isles run dev"

[services.production]
build = [ "pnpm", "--filter", "@workspace/tideborn-isles", "run", "build" ]
serve = "static"
publicDir = "artifacts/tideborn-isles/dist/public"

[[services.production.rewrites]]
from = "/*"
to = "/index.html"

[services.env]
PORT = "18421"
BASE_PATH = "/"
