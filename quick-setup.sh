#!/bin/bash

set -e 

readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly BLUE='\033[0;34m'
readonly NC='\033[0m'

readonly TEMPLATE_REPO="https://github.com/curatedcode/astro-boiler.git"
readonly SCRIPT_NAME="$(basename "$0")"

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

validate_project_name() {
    local name="$1"
    
    if [[ -z "$name" ]]; then
        print_error "Project name cannot be empty"
        return 1
    fi
    
    if [[ "$name" =~ [^a-zA-Z0-9._-] ]]; then
        print_error "Project name contains invalid characters. Use only letters, numbers, dots, hyphens, and underscores."
        return 1
    fi
    
    if [[ -d "$name" ]]; then
        print_error "Directory '$name' already exists"
        return 1
    fi
    
    return 0
}

check_prerequisites() {
    print_status "Checking prerequisites..."
    
    local missing_deps=()
    
    if ! command_exists git; then
        missing_deps+=("git")
    fi
    
    if ! command_exists node; then
        missing_deps+=("node")
    fi
    
    if ! command_exists pnpm; then
        missing_deps+=("pnpm")
    fi
    
    if [[ ${#missing_deps[@]} -gt 0 ]]; then
        print_error "Missing required dependencies: ${missing_deps[*]}"
        print_error "Please install the missing dependencies and try again"
        exit 1
    fi
    
    print_success "All prerequisites satisfied"
}

get_project_name() {
    local project_name
    
    while true; do
        read -p "Enter project name: " project_name
        
        if validate_project_name "$project_name"; then
            echo "$project_name"
            return 0
        fi
        
        print_warning "Please try again with a valid project name"
    done
}

clone_template() {
    local project_name="$1"
    
    print_status "Cloning Astro template..."
    
    if ! git clone --quiet "$TEMPLATE_REPO" "$project_name"; then
        print_error "Failed to clone template repository"
        exit 1
    fi
    
    print_success "Template cloned successfully"
}

install_dependencies() {
    local project_name="$1"
    
    print_status "Installing dependencies..."
    
    cd "$project_name" || {
        print_error "Failed to change directory to $project_name"
        exit 1
    }
    
    print_status "Using pnpm to install dependencies..."
    
    if ! pnpm install; then
        print_error "Failed to install dependencies"
        exit 1
    fi
    
    print_success "Dependencies installed successfully"
}

initialize_git() {
    print_status "Initializing Git repository..."
    
    if [[ -d ".git" ]]; then
        rm -rf .git
    fi
    
    if ! git init --quiet; then
        print_error "Failed to initialize Git repository"
        exit 1
    fi
    
    git add . && git commit --quiet -m "feat: initial commit"
    
    print_success "Git repository initialized with initial commit"
}

open_vscode() {
    local project_name="$1"
    
    if command_exists code; then
        print_status "Opening project in VSCode... Happy coding! 🚀"
        code .
        print_success "Project opened in VSCode"
    else
        print_warning "VSCode not found in PATH. Skipping VSCode launch."
    fi
}

cleanup() {
    local project_name="$1"
    
    if [[ -n "$project_name" && -d "$project_name" ]]; then
        print_warning "Cleaning up incomplete project directory..."
        rm -rf "$project_name"
    fi
}

main() {
    echo "🚀 Astro Project Setup"
    echo "====================="
    echo
    
    check_prerequisites
    
    local project_name
    project_name=$(get_project_name)
    
    trap 'cleanup "$project_name"' ERR
    
    clone_template "$project_name"
    install_dependencies "$project_name"
    initialize_git
    open_vscode "$project_name"
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi