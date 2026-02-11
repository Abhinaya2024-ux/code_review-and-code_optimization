def analyze_code(code: str):

    review = {
        "bugs": [],
        "code_smells": [],
        "suggestions": [],
        "complexity": "O(1)"
    }

    score = 100

    # Detect nested loops
    if code.count("for") > 1:
        review["code_smells"].append("Nested loops detected")
        review["complexity"] = "O(n^2)"
        review["suggestions"].append("Try reducing nested loops")
        score -= 15

    # Detect eval usage
    if "eval(" in code:
        review["bugs"].append("Use of eval() is unsafe")
        score -= 20

    # Long code
    if len(code) > 300:
        review["code_smells"].append("Code length is too long")
        score -= 5

    return max(score, 0), review
