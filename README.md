
# MORPHET
<img src="https://github.com/oputaolivia/morphix/assets/72948572/02d3bb61-6dc8-43ce-8a4c-bda3465a8d78" alt="morphet" width="150" height="150">

## Introduction
Morphet is a Node.js command-line interface (CLI) tool designed to simplify file & directory manipulation tasks. With this tool, you can perform various file operations, such as creating, copying, moving, deleting, searching and even opening files using the default application associated with their file type as well as create and delete directories.

## Features
### File Features
- Create an empty file of any type
- Write in an empty file/ Overwrite a file
- Read the content of a file
- Copy files from one location to another.
- Move files between folders or directories.
- Delete files from the file system.
- Open files using the default application.
- Search if file exists
- List files in a directory

### Directory Features
- Create directory
- Delete directory

## Requirements
- Node.js installed on your machine.

## Installation Guide
Morphet can be installed via `npm` or `cloning the GitHub repo`

### GitHub
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using the following command:

```
npm install
```

### NPM
Install the dependency via npm registery with the following command:
```
npm i -g Morphet
```
## Usage
To use the CLI tool, open your terminal and navigate to the project directory. The CLI provides the following commands:
1. Create File(s):
```
morph create <file...> 
```
2. Write in File(s):
```
morph write <file>
```
 
3. Open a file using the default application:
```
morph open <file>
```

4. Copy a file:
```
morph copy <source> <destination>
```

5. Move a file:
```
morph move <filePath> <destinationPath>
```

6. Delete File(s):
```
morph del <file...>
```

7. Search for File(s):
```
morph lookup <file...>
```

8. Read a File:
```
morph read <file>
```

9. List File(s):
```
morph list <folder Path>
```

10. Create Directory(s):
```
morph dir <Directory Path(s)>
```

11. Delete Directory(s):
```
morph deldir <Directory Path(s)>
```

## Conclusion
By utilizing this CLI Tool, you can simplify file & directory handling and optimize the performance of your web applications.

Feel free to explore and customize this tool based on your specific requirements. If you encounter any issues or have suggestions for improvement, please feel free to contribute or report them on the GitHub repository.
