#!/usr/bin/fish

for image in ./**/*
    set MIMETYPE (mimetype "$image")
    set ISIMAGE (string match "*image/*" "$MIMETYPE")
    set ISWEBP (string match "*webp*" "$MIMETYPE")
    if test -n "$ISIMAGE"
        and test -z "$ISWEBP"
        set OUTPATH (path change-extension webp "$image")
        cwebp -q 80 "$image" -o "$OUTPATH"
    end
end
