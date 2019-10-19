Set objFso = CreateObject(“Scripting.FileSystemObject”)

Set Folder = objFSO.GetFolder(“ENTER\PATH\HERE”)

For Each File In Folder.Files

    sNewFile = File.Name

    sNewFile = Replace(sNewFile,”ORIGINAL”,”REPLACEMENT”)

    if (sNewFile<>File.Name) then

        File.Move(File.ParentFolder+”\”+sNewFile)

    end if

Next


Option Explicit
Dim fso 
 
Set fso = CreateObject("Scripting.FileSystemObject")
 
'To Copy a file
fso.CopyFile "LOCATION", "NEW LOCATION"
'To Copy a folder
fso.CopyFolder "LOCATION", "NEW LOCATION"
 
'To Move a file
fso.MoveFile "LOCATION", "NEW LOCATION"
'To Move a folder
fso.MoveFolder "LOCATION", "NEW LOCATION"