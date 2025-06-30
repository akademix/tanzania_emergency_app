# TTS JSON Files for Emergency Guides

This directory contains JSON files formatted for text-to-speech synthesis of all emergency guide content. The files are structured to work with your TTS script as specified.

## Available files

### Individual guide files
- **`burns_texts.json`** - Burns treatment guide (21 entries)
- **`traffic_accident_texts.json`** - Traffic accident response guide (27 entries)  
- **`snake_bite_texts.json`** - Snake bite treatment guide (18 entries)

### Combined file
- **`all_guides_texts.json`** - All three guides combined (66 entries total)

## Usage examples

### Process individual guides
To generate audio for each guide separately:

```bash
# Burns guide
python tts.py --json-file burns_texts.json --output-dir audio/burns

# Traffic accident guide  
python tts.py --json-file traffic_accident_texts.json --output-dir audio/traffic-accident

# Snake bite guide
python tts.py --json-file snake_bite_texts.json --output-dir audio/snake-bite
```

### Process all guides together
To generate audio for all guides in one batch:

```bash
python tts.py --json-file all_guides_texts.json --output-dir audio/all_guides
```

## File structure

Each JSON file contains an array of objects with this structure:
```json
{
  "id": "unique_identifier",
  "english": "English text content",
  "swahili": "Swahili text content"
}
```

## Content mapping

The JSON IDs correspond to specific audio file paths expected in the app:

### Burns Guide
- `burns_title` → `/audio/burns/burns_title_[language].wav`
- `burns_description` → `/audio/burns/burns_description_[language].wav`
- `burns_step1` → `/audio/burns/burns_step1_[language].wav`
- `burns_danger1` → `/audio/burns/burns_danger1_[language].wav`
- `burns_sign1` → `/audio/burns/burns_sign1_[language].wav`
- `burns_additional_info` → `/audio/burns/burns_additional_info_[language].wav`

### Traffic Accident Guide
- `traffic_accident_title` → `/audio/traffic-accident/traffic_accident_title_[language].wav`
- `traffic_accident_step1` → `/audio/traffic-accident/step1_[language].wav`
- `traffic_accident_danger1` → `/audio/traffic-accident/danger1_[language].wav`
- `traffic_accident_sign1` → `/audio/traffic-accident/sign1_[language].wav`
- etc.

### Snake Bite Guide
- `snake_bite_title` → `/audio/snake-bite/snake_bite_title_[language].wav`
- `snake_bite_step1` → `/audio/snake-bite/step1_[language].wav`
- `snake_bite_danger1` → `/audio/snake-bite/danger1_[language].wav`
- `snake_bite_sign1` → `/audio/snake-bite/sign1_[language].wav`
- etc.

## Recommended workflow

1. **Test with one guide first:**
   ```bash
   python tts.py --json-file burns_texts.json --output-dir test_audio
   ```

2. **Once satisfied, process all guides:**
   ```bash
   python tts.py --json-file all_guides_texts.json --output-dir audio_output
   ```

3. **Organize output files** to match the expected directory structure in your app.

## Notes

- All text content has been cleaned and formatted for TTS
- Bullet points and formatting characters have been converted to natural speech
- Emergency phone numbers (0800 750 112) are included in relevant content
- Swahili text uses proper Tanzanian Swahili medical terminology
- Each entry has both English and Swahili versions for complete bilingual support

## Audio file organization

After running the TTS script, you may want to reorganize the generated files to match your app's expected structure:

```
audio/
├── burns/
│   ├── burns_title_english.wav
│   ├── burns_title_swahili.wav
│   ├── burns_step1_english.wav
│   ├── burns_step1_swahili.wav
│   └── ...
├── traffic-accident/
│   ├── traffic_accident_title_english.wav
│   ├── traffic_accident_title_swahili.wav
│   └── ...
└── snake-bite/
    ├── snake_bite_title_english.wav
    ├── snake_bite_title_swahili.wav
    └── ...
``` 