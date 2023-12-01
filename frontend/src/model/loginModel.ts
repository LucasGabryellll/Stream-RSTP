export interface LoginResponse {
    jsonrpc: string
    result: Result
    id: number
}

export interface Result {
  userid: string
  username: string
  name: string
  surname: string
  url: string
  autologin: string
  autologout: string
  lang: string
  refresh: string
  theme: string
  attempt_failed: string
  attempt_ip: string
  attempt_clock: string
  rows_per_page: string
  timezone: string
  roleid: string
  type: number
  userip: string
  debug_mode: number
  gui_access: number
  sessionid: string
}
