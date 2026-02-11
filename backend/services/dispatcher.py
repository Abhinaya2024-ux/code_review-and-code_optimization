from .python_analyzer import analyze_python
from .llm_fallback import analyze_with_llm


def analyze_code_by_language(code: str, language: str):

    if not language:
        return 50, {
            "bugs": ["Language not specified"],
            "code_smells": [],
            "suggestions": [],
            "complexity": "Unknown"
        }

    language = language.lower().strip()

    if language == "python":
        return analyze_python(code)

    elif language in ["javascript", "js"]:
        return analyze_with_llm(code, "JavaScript")

    elif language in ["c", "c++", "cpp"]:
        return analyze_with_llm(code, language.upper())

    elif language == "java":
        return analyze_with_llm(code, "Java")

    elif language in ["c#", "csharp"]:
        return analyze_with_llm(code, "C#")

    else:
        return analyze_with_llm(code, language)
