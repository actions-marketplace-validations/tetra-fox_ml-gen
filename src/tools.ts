import * as exec from "@actions/exec";
import os from "os";

// Aliases for common commands
export default class Tools {
  static async extract(src: string, dest: string): Promise<void> {
    await exec.exec(`unzip "${src}" -d "${dest}"`);
  }
  static async wget(url: string, path: string): Promise<void> {
    await exec.exec(
      `${
        os.platform() === "win32" ? "C:\\msys64\\usr\\bin\\wget.exe" : "wget"
      } -q -P "${path}" "${url}"`
    );
  }
}
